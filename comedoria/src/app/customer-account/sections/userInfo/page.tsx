// Componente UserInfo para encapsular as informações do usuário
export default function UserInfo({ name, email }: { name: string; email: string }) {
    return (
      <div className="space-y-5">
        <h2 className="text-3xl font-semibold">{name}</h2>
        <p className="text-gray-600">{email}</p>
      </div>
    );
  }