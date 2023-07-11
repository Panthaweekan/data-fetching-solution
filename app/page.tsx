import ServerComponent from "@components/t1_serverComponent";
import ClientUseEffect from "@components/t2_clientUseEffect";
import ClientGlobalStore from "@components/t3_clientGlobalStore";
import ClientGlobalStoreUpdate from "@components/t4_clientGlobalStoreUpdate";
import ClientReactQuery from "@components/t5_clientReactQuery";
import ClientReactQueryTwo from "@components/t6_clientReactQueryTwo";

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
