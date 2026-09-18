"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

export interface TripPlan {
  from: string;
  where: string;
  when: string;
  /** How much give there is around `when`. */
  flexibility: string;
  duration: string;
}

interface TripPlanContextValue {
  plan: TripPlan | null;
  submitPlan: (plan: TripPlan) => void;
  clearPlan: () => void;
}

const TripPlanContext = createContext<TripPlanContextValue | null>(null);

export function TripPlanProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [plan, setPlan] = useState<TripPlan | null>(null);

  const clearPlan = useCallback(() => setPlan(null), []);

  /* Memoised: this provider wraps every page, and a fresh object here rerenders
     the whole tree on any parent render. */
  const value = useMemo(
    () => ({ plan, submitPlan: setPlan, clearPlan }),
    [plan, clearPlan],
  );

  return <TripPlanContext.Provider value={value}>{children}</TripPlanContext.Provider>;
}

export function useTripPlan() {
  const context = useContext(TripPlanContext);
  if (!context) {
    throw new Error("useTripPlan must be used within a TripPlanProvider");
  }
  return context;
}
