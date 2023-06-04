import moment from 'moment';
import ExchangeRate from '../models/exchangeRate.js';

const resolvers = {
    Query: {
        async getExchangeRate(_, args) { 
          
          const { src, tgt } = args
          const date = moment().format('YYYY-MM-DD');
    
          const filter = { src: src, tgt: tgt, date: date };
    
          try {
            const exchangeRate = await ExchangeRate.findOne(filter);
            return exchangeRate;
          } catch (err) {
            console.error('환율 조회 오류:', err);
          }
    
        }
      },
    
      Mutation: {
        async postExchangeRate(_, args) {
          const { info } = args;
    
          const filter = { src: info.src, tgt: info.tgt, date: info.date };
    
          const update = { rate: info.src == info.tgt ? 1.0 : info.rate };
    
          const options = { upsert: true, new: true };
    
          try {
            const exchangeRate = await ExchangeRate.findOneAndUpdate(filter, update, options);
            return exchangeRate;
          } catch (err) {
            console.error('환율 업데이트 오류:', err);
          }
        },
        
        async deleteExchangeRate(_, args) {
          const { info } = args;
        
          const filter = { src: info.src, tgt: info.tgt, date: info.date };
    
          try {
            const deletedExchangeRate = await ExchangeRate.findOne(filter);
            await ExchangeRate.deleteOne(filter);
    
            return deletedExchangeRate;
            
          } catch (err) {
            console.error('환율 삭제 오류:', err);
          }
    
        },
      }
};

export default resolvers;