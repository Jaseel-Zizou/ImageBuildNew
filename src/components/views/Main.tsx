import DynamicPages from "./DynamicPages"
import { useParams } from "react-router-dom";

export default function Main() {
   const { id }: any = useParams();
   return (
      <div>
         <DynamicPages id={id} />
      </div>)
};
