import { useState } from "react";
import { useNavigate } from "react-router";

import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { CATEGORIES, CATEGORIES_KEYS } from "../utils/categories";
import { Upload } from "../components/Upload";
import { Button } from "../components/Button";

export function Refund() {
  const [name, SetName] = useState("");
  const [amount, SetAmount] = useState("");
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [filename, setFileName] = useState<File | null>(null);

  const navigate = useNavigate();

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();

    console.log(name, amount, category, filename);
    navigate("/confirm", { state: { fromSubmit: true } });
  }

  return (
    <form
      onSubmit={onSubmit}
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

      <Input
        required
        legend="Name of the solicitation"
        value={name}
        onChange={(event) => SetName(event.target.value)}
      />

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
        <Input
          legend="Amount"
          required
          value={amount}
          onChange={(event) => SetAmount(event.target.value)}
        />
      </div>

      <Upload
        filename={filename && filename.name}
        onChange={(event) =>
          event.target.files && setFileName(event.target.files[0])
        }
      />

      <Button type="submit" isLoading={isLoading}>
        Send
      </Button>
    </form>
  );
}
