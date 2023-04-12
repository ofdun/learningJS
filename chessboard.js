let given_height = 8;
let given_width = 8;
let string = "";
for (let height = 0; height < given_height; height++)
{
    for (let width = 0; width < given_width; width++)
    {
        if (height % 2) width % 2 ? string += " " : string += "#";
        else width % 2 ? string += "#" : string += " ";
    }
    string += "\n";
}

console.log(string);