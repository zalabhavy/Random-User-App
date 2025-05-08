import { useState } from "react";
function Buttons(popat)
{
  const [cnt,Setcnt] = useState(0);
  return (
   <div>
      <button onClick={()=>Setcnt(cnt+1)}>
               Count is {cnt} {popat.anyname}
      </button>
   </div>
  );
}
export default Buttons;