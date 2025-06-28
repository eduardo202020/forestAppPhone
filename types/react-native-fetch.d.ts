// types/react-native-fetch.d.ts

declare var fetch: (
  input: RequestInfo,
  init?: RequestInit
) => Promise<Response>;

// If needed, declare RequestInfo, RequestInit, and Response for React Native
interface RequestInit {
  method?: string;
  headers?: any;
  body?: any;
  // ...other properties as needed
}

type RequestInfo = string;

interface Response {
  json(): Promise<any>;
  // ...other methods as needed
}
