import { Alert } from "@/components/Alert";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { toast } from "react-hot-toast";

export function extractErrorMessage(error: Error): string {
  if (error instanceof Error) {
    const match = error.message.match(/'([^']+)'/);

    if (match && match[1]) {
      return match.input as string;
    }
  }

  return "An error occurred";
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000,
    },
  },
  queryCache: new QueryCache({
    onError: (error) => {
      const errMsg = extractErrorMessage(error as Error);
      toast.error(errMsg, { duration: 40000, position: "top-center" });
    },
  }),
});

const DataProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Alert />
    </QueryClientProvider>
  );
};

export default DataProvider;
