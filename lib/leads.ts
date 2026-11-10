// Saves every form submission to the Supabase `leads` table (see supabase/migrations).
// Server only: uses the service role key, which must never reach the browser.
// Without SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY the save is skipped and the e-mail still goes out.

export interface LeadRecord {
  source: "demo" | "booking" | "contact";
  name: string;
  email: string;
  company?: string;
  phone?: string;
  link?: string;
  industry?: string;
  has_website?: string;
  goal?: string;
  lead_source?: string;
  timeline?: string;
  recommended_package?: string;
  message?: string;
  booking_date?: string;
  booking_time?: string;
  page?: string;
  utm?: Record<string, string>;
}

export function isLeadStoreConfigured(): boolean {
  return Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
}

export async function saveLead(record: LeadRecord): Promise<{ saved: boolean; error?: string }> {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return { saved: false, error: "Supabase is not configured" };

  // Empty strings are stored as NULL
  const row = Object.fromEntries(Object.entries(record).filter(([, value]) => value !== "" && value !== undefined));

  try {
    const response = await fetch(`${url.replace(/\/$/, "")}/rest/v1/leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: key,
        Authorization: `Bearer ${key}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify(row),
      cache: "no-store",
    });
    if (!response.ok) {
      const error = `Supabase ${response.status}: ${(await response.text()).slice(0, 200)}`;
      console.error("Lead save failed:", error);
      return { saved: false, error };
    }
    return { saved: true };
  } catch (error) {
    console.error("Lead save failed:", error);
    return { saved: false, error: error instanceof Error ? error.message : "Unknown Supabase error" };
  }
}
