import React from "react";
import { useRouter } from "next/router";

export default function UserId() {
  const router = useRouter();
  console.log(router);
  return <div>[userId]: {router.query.userId}</div>;
}
