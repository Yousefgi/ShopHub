import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // مدة اعتبار البيانات حديثة
      staleTime: 1000 * 60 * 5, // 5 minutes

      // لا تعيد الطلب عند الرجوع للصفحة
      refetchOnWindowFocus: false,

      // إعادة المحاولة مرة واحدة فقط
      retry: 1,

      // لا تعمل refetch تلقائي عند mount
      refetchOnMount: true,
    },

    mutations: {
      // لا تعيد تنفيذ العمليات الحساسة تلقائياً
      retry: false,
    },
  },
});