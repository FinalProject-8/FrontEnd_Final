import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export function adminLocation() {
  const location = useLocation().pathname;
  if (location.includes('strategy')) {
    return 1;
  } else if (location.includes('previous')) {
    return 2;
  } else {
    return 0;
  }
}
