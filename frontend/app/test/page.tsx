import { supabase } from "../../lib/supabase/client";

export default async function TestPage() {
  const { data, error } = await supabase
    .from("test")
    .select("*");

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold">
        Supabase Connection Test
      </h1>

      <pre className="mt-6 rounded-xl bg-gray-100 p-6">
        {JSON.stringify(
          {
            data,
            error,
          },
          null,
          2
        )}
      </pre>
    </main>
  );
}