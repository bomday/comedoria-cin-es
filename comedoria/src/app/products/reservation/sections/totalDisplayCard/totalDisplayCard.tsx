export const TotalDisplay = ({ total }: { total: number }) => {
  return (
    <div className="mt-0 mb-6 p-4 rounded-lg">
      <div className="flex justify-end items-center gap-x-4">
        <p className="text-2xl font-bold text-[#45480F]">Total a pagar:</p>
        <span className="text-4xl font-bold text-[#9B4701]">
          R$ {total.toFixed(2).replace('.', ',')}
        </span>
      </div>
    </div>
  )
};
  