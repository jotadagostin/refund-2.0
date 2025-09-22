import { useState } from "react";
import searchSvg from "../assets/search.svg";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Refunditem } from "../components/RefundItem";
import { CATEGORIES } from "../utils/categories";
import { formatCurrency } from "../utils/formatCurrency";
import { Pagination } from "../components/Paginantion";

const REFUND_EXAMPLE = {
  id: "123",
  name: "Rodrigo",
  category: "Transport",
  amount: formatCurrency(34.5),
  categoryImg: CATEGORIES["transport"].icon,
};

export function Dashboard() {
  const [name, setName] = useState("");
  function fetchRefunds(event: React.FormEvent) {
    event.preventDefault();
    console.log(name);
  }

  return (
    <div className="bg-gray-500 rounded-xl p-10 md:min-w-[768px]">
      <h1 className="text-gray-100 font-bold text-xl flex-1">Solicitations</h1>

      <form
        onSubmit={fetchRefunds}
        className="flex flex-1 items-center justify-between pb-6 border-b-[1px] border-b-gray-400 md:flex-row gap-2 mt-6"
      >
        <Input
          placeholder="Search by the name"
          onChange={(event) => setName(event.target.value)}
        />

        <Button variant="icon">
          <img src={searchSvg} alt="seachr icon" className="w-5" />
        </Button>
      </form>
      <div className="mt-6 flex flex-col gap-4 max-h-[342px] overflow-y-scroll">
        <Refunditem data={REFUND_EXAMPLE} />
      </div>

      <Pagination current={1} total={10} />
    </div>
  );
}
