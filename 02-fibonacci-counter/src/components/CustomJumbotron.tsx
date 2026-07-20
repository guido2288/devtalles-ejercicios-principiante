interface Props {
  title: string;
  description?: string;
}

export const CustomJumbotron = ({ title, description }: Props) => {
  return (
    <div className="jumbotron-container">
      <h1 className="jumbotron-title">
        {title}
      </h1>
      {description && <p className="jumbotron-description">{description}</p>}
    </div>
  );
};