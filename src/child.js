import React from 'react';

// without useMemo
// export default function Child({name}) {
// console.log("Skinny Jack")
//   return (
//     <div>{name}</div>
//   )
// }

export default React.memo(function Child({ name }) {
  console.log('child');
  return (
    <>
      {name()}
      <div>Really Skinny Jack</div>
    </>
  );
});
