type StockRecommendationProps = {
  recommendations: string[];
};

export const StockRecommendations: React.FC<StockRecommendationProps> = ({
  recommendations,
}) => {
  return (
    <div className="recommendations-container">
      <h3 className="text-lg font-bold">Stock Recommendations</h3>
      <ul>
        {recommendations.map((stock, index) => (
          <li key={index}>{stock}</li>
        ))}
      </ul>
    </div>
  );
};
