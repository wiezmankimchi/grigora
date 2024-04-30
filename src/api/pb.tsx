import PocketBase from "pocketbase";

const db = new PocketBase("http://mx:8090");
export const pb = () => {
  return db;
};

export const getRecords = async (
  setIsLoading,
  setError,
  setResponse,
  page = 1,
  perPage = 50
) => {
  const pb = db;
  pb.autoCancellation(true);
  try {
    const records = await pb
      .collection("recipes")
      .getList(page, perPage, { expand: "categoryID" });
    setResponse(records.items);
    setIsLoading(false);
    setError(false);
  } catch (error) {
    setError(true);
    setIsLoading(false);
    setResponse([{ id: 1, error: error }]);
  }
};
