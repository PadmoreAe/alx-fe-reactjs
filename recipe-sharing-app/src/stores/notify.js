import { useMessageStore } from "./useMessageStore";

export const notify = (message, type = "success") => {
  useMessageStore.getState().setMessage(message, type);
};
