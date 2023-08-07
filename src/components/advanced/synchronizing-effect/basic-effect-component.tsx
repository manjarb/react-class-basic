import { useEffect } from "react";

export default function BasicEffectComponent() {
  // useEffect(() => {
  //   // This code run every Rerender
  //   console.log('rerender')  
  // })

  // useEffect(() => {
  //   // This code run every Rerender
  //   console.log('rerender once')
  //   // Request data from netflix server
  // }, [])

  // useEffect(() => {
  //   const connection = createConnection();
  //   connection.connect();

  //   return () => {
  //     connection.disconnect();
  //   };
  // }, []);  

  return <div />
}