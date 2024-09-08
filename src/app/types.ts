export interface WineDataMax {
  _id: string;
  Title: string;
  Description: string;
  Price: string;
  Capacity: string;
  Grape: string;
  Closure: string;
  Country: string;
  Units: number;
  Characteristics: string;
  "Per bottle / case / each": string;
  Type: string;
  ABV: string;
  Region: string;
  Style: string;
  Vintage: number;

}

export interface WineDataMin {
  _id: string;
  Title: string;
  Description: string;
  Price: string;
  Capacity: string;
  "Per bottle / case / each": string;
  Type: string;
}

export const isWine = (wine: any): wine is WineDataMax => {
  return (
    typeof wine.Grape === 'string' &&
    typeof wine.Closure === 'string' &&
    typeof wine.Country === 'string' &&
    typeof wine.Units === 'number' &&
    typeof wine.Characteristics === 'string' &&
    typeof wine.ABV === 'string' &&
    typeof wine.Region === 'string' &&
    typeof wine.Style === 'string' &&
    typeof wine.Vintage === 'number'
  );
};
