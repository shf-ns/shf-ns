import {type Times} from '@/types/Time'

function useComputeTime(data: Date): Times {
  const time:Times = {
    year: '',
    month: '',
    day: '',
    hour: '',
    minute: '',
    second: '',
  }

  time.year = data.getFullYear().toString();
  time.month = String(data.getMonth() + 1).padStart(2, '0');
  time.day = String(data.getDate()).padStart(2, '0');
  time.hour = String(data.getHours()).padStart(2, '0');
  time.minute = String(data.getMinutes()).padStart(2, '0');
  time.second = String(data.getSeconds()).padStart(2, '0');

  return time;
}

export default useComputeTime;