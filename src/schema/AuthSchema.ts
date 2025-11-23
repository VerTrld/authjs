import * as y from "yup";

export const AuthSchema = y.object({
  name: y.string().optional(),
  email: y.string().required(),
  hash: y.string().required(),
});
type IAuthSchema = y.InferType<typeof AuthSchema>;

export default IAuthSchema;
