// store/types.ts
export interface CounterState {
  count: number;
  user: { id: number; name: string } | null;
}

export interface CounterActions {
  inc: (by?: number) => void;
  setUser: (u: CounterState["user"]) => void;
  reset: () => void;
}

// รวมเป็นชนิดของ Store
export type CounterStore = CounterState & CounterActions;

