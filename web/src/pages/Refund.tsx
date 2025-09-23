import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import fileSvg from "../assets/file.svg";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { CATEGORIES, CATEGORIES_KEYS } from "../utils/categories";
import { Upload } from "../components/Upload";
import { Button } from "../components/Button";

export function Refund() {
  const [name, SetName] = useState("teste");
  const [amount, SetAmount] = useState("33");
  const [category, setCategory] = useState("transport");
  const [isLoading, setIsLoading] = useState(false);
  const [filename, setFileName] = useState<File | null>(null);

  const navigate = useNavigate();
  const params = useParams<{ id: string }>();
  console.log(params.id);

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (params.id) {
      return navigate(-1);
    }

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
        disabled={!!params.id}
      />

      <div className="flex gap-4">
        <Select
          required
          legend="Category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          disabled={!!params.id}
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
          disabled={!!params.id}
        />
      </div>

      {params.id ? (
        <a
          href="https://www.rocketseat.com.br/"
          target="blank"
          className="text-sm text-green-100 font-semibold flex items-center justify-center gap-2 my-6 hover:opacity-70 transition ease-linear"
        >
          <img src={fileSvg} alt="file green icon" />
          Open the voucher
        </a>
      ) : (
        <Upload
          filename={filename && filename.name}
          onChange={(event) =>
            event.target.files && setFileName(event.target.files[0])
          }
        />
      )}

      <Button type="submit" isLoading={isLoading}>
        {params.id ? "Return" : "Send"}
      </Button>
    </form>
  );
}
