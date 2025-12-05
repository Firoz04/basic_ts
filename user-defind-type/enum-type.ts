//enum means store constants; duplicate value is not allowed here
//enum types - numeric, string, hetergenous

//numeric enum
enum CardinalDirections {
  North,
  East,
  South,
  West
}
//let currentDirection = CardinalDirections.North;
//console.log(currentDirection);
console.log(CardinalDirections);


//numeric Enums - initialized
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}

console.log(StatusCodes.BadRequest);
console.log(StatusCodes.Success);


//string enum
enum CardinalDirections {
  north = 'North',
  east = "East",
  south = "South",
  west = "West"
};
console.log(CardinalDirections.east);
console.log(CardinalDirections.south);


//hetergenous enum
enum CardinalDirectionsWithStatusCode {
  North = 'North',
  East = "East",
  NotFound = 404,
  Success = 200,
  Accepted,
  BadRequest
};
console.log(CardinalDirectionsWithStatusCode.North);
console.log(CardinalDirectionsWithStatusCode.Success);
//log accepted =201(next value)
console.log(CardinalDirectionsWithStatusCode.Accepted);