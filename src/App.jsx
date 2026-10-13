import react from 'react';
import { BrowserRouter, routes, route} from 'react-router-dom';

export default function app(){
  return(
    <BrowserRouter>
    <div>

      <routes>
        <route/>
        <route/>
        </Routes>
    </div>
    </BrowserRouter>
  );
}