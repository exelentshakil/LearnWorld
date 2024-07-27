
import {getUser} from "@/lib";


export default async function Home() {
  const user = await getUser()
  return (
    <div className="home">
        <p>Hello, { user.name }</p>
    </div>
  );
}
