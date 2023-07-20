import ServerComponent from "@components/t1_serverComponent";
import ClientUseEffectOne from "@components/t2_clientUseEffectOne";
import ClientUseEffectTwo from "@components/t3_clientUseEffectTwo";
import ClientGlobalStore from "@components/t4_clientGlobalStore";
import ClientGlobalStoreUpdate from "@components/t5_clientGlobalStoreUpdate";
import ClientReactQuery from "@components/t6_clientReactQuery";
import ClientReactQueryTwo from "@components/t7_clientReactQueryTwo";

export default function Home() {
  return (
    <div className="flex flex-col items-start gap-4">
      <div>
        <div className="font-bold">Server Fetch</div>
        <ServerComponent />
      </div>

      <div>
        <div className="font-bold">UseEffect Fetch (1)</div>
        <ClientUseEffectOne />
      </div>
      <div>
        <div className="font-bold">UseEffect Fetch (2)</div>
        <ClientUseEffectTwo />
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
