//enum means store constants; duplicate value is not allowed here
//enum types - numeric, string, hetergenous
//numeric enum
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["South"] = 2] = "South";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
//let currentDirection = CardinalDirections.North;
//console.log(currentDirection);
console.log(CardinalDirections);
//numeric Enums - initialized
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.BadRequest);
console.log(StatusCodes.Success);
//string enum
(function (CardinalDirections) {
    CardinalDirections["north"] = "North";
    CardinalDirections["east"] = "East";
    CardinalDirections["south"] = "South";
    CardinalDirections["west"] = "West";
})(CardinalDirections || (CardinalDirections = {}));
;
console.log(CardinalDirections.east);
console.log(CardinalDirections.south);
//hetergenous enum
var CardinalDirectionsWithStatusCode;
(function (CardinalDirectionsWithStatusCode) {
    CardinalDirectionsWithStatusCode["North"] = "North";
    CardinalDirectionsWithStatusCode["East"] = "East";
    CardinalDirectionsWithStatusCode[CardinalDirectionsWithStatusCode["NotFound"] = 404] = "NotFound";
    CardinalDirectionsWithStatusCode[CardinalDirectionsWithStatusCode["Success"] = 200] = "Success";
    CardinalDirectionsWithStatusCode[CardinalDirectionsWithStatusCode["Accepted"] = 201] = "Accepted";
    CardinalDirectionsWithStatusCode[CardinalDirectionsWithStatusCode["BadRequest"] = 202] = "BadRequest";
})(CardinalDirectionsWithStatusCode || (CardinalDirectionsWithStatusCode = {}));
;
console.log(CardinalDirectionsWithStatusCode.North);
console.log(CardinalDirectionsWithStatusCode.Success);
//log accepted =201(next value)
console.log(CardinalDirectionsWithStatusCode.Accepted);
