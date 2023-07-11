import ServerComponent from "@components/server-fetch";
import ClientUseEffect from "@components/client-useEffect";
import ClientGlobalStore from "@components/client-globalStore";
export default function Home() {
  return (
    <div>
      <div className="font-bold">Server Fetch</div>
      <ServerComponent />

      <div className="font-bold">UseEffect Fetch</div>
      <ClientUseEffect />

      <div className="font-bold">Global Store Fetch</div>
      <ClientGlobalStore />
    </div>
  );
}
