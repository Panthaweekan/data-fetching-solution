import ServerComponent from "@components/serverFetch";
import ClientUseEffect from "@components/clientUseEffect";
import ClientGlobalStore from "@components/clientGlobalStore";
import ClientGlobalStoreUpdate from "@components/clientGlobalStoreUpdate";
import ClientReactQuery from "@components/clientReactQuery/page";
import ClientReactQueryTwo from "@components/clientReactQueryTwo/page";

export default function Home() {
  return (
    <div className="flex flex-col items-start gap-4">
      <div>
        <div className="font-bold">Server Fetch</div>
        <ServerComponent />
      </div>

      <div>
        <div className="font-bold">UseEffect Fetch</div>
        <ClientUseEffect />
      </div>

      <div>
        <div className="font-bold">Global Store Fetch</div>
        <ClientGlobalStore />
      </div>

      <div>
        <div className="font-bold">Global Store Update</div>
        <ClientGlobalStoreUpdate />
      </div>

      <div>
        <div className="font-bold">React Query</div>
        <ClientReactQuery />
      </div>
      <div>
        <div className="font-bold">React Query Two</div>
        <ClientReactQueryTwo />
      </div>
    </div>
  );
}
