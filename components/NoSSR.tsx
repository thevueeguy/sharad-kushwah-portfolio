"use client";

import React, { ReactNode, useEffect, useState } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

function NoSSRComponent({ children, fallback }: Props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return <>{loading ? fallback || null : children}</>;
}

export default NoSSRComponent;
