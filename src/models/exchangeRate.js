import mongoose from 'mongoose';

// ExchangeRate 모델 정의
const exchangeRateSchema = new mongoose.Schema({
    src: String,
    tgt: String,
    rate: Number,
    date: String
  });
  
  const ExchangeRate = mongoose.model('ExchangeRate', exchangeRateSchema);

  export default ExchangeRate;