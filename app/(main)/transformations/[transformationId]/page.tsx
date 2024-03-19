import { IParams } from "@/types/types";

const TransformationId: React.FC<IParams<{ transformationId: string }>> = ({
  params: { transformationId },
}) => {
  return <div>TransformationId</div>;
};

export default TransformationId;
