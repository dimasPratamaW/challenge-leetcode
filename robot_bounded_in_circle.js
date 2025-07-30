/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function (instructions) {
  var robot_position = [0, 0];
  var robot_facing = "N";
  const list_position = { W: -1, N: 1, E: 1, S: -1 };
  const array_position = ["W", "N", "E", "S"];

    for (let j = 0; j < instructions.length; j++) {
      // check the facing
      if (instructions[j] === "G") {
        if (robot_facing === "N" || robot_facing === "S") {
          robot_position[1] += list_position[robot_facing];
        } else {
          robot_position[0] += list_position[robot_facing];
        }
      } 
      else {
        var currently_facing = array_position.indexOf(robot_facing);
        if (instructions[j] === "R") {
          robot_facing = array_position[(currently_facing + 1) % 4];
        } else {
          robot_facing = array_position[(currently_facing + 3) % 4];
        }
      }
    }

    if (
      robot_position[0] === 0 &&
      robot_position[1] === 0) 
    {
        return true;
    }
    else if (robot_facing !== "N"){
        return true;
    }
    else {
        return false;
    }

  };

// example input from user
console.log(isRobotBounded("GG"));
