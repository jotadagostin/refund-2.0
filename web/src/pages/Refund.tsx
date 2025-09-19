import { useState } from "react";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { CATEGORIES, CATEGORIES_KEYS } from "../utils/categories";
import { Upload } from "../components/Upload";

export function Refund() {
  const [category, setCategory] = useState("");

  console.log(CATEGORIES_KEYS);
  return (
    <form
      action=""
      className="bg-gray-500 w-full rounded-xl flex flex-col p-10 gap-6 lg:min-w-[512px]"
    >
      <header>
        <h1 className="text-xl font-bold text-gray-100">
          Solicitation of Refund
        </h1>
        <p className="text-sm text-gray-200 mt-2 mb-4">
          expense details for requesting refund
        </p>
      </header>

      <Input required legend="Name of the solicitation" />

      <div className="flex gap-4">
        <Select
          required
          legend="Category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          {CATEGORIES_KEYS.map((category) => (
            <option key={category} value={category}>
              {CATEGORIES[category].name}
            </option>
          ))}
        </Select>
        <Input legend="Amount" required />
      </div>

      <Upload filename="jota.png" />
    </form>
  );
}
