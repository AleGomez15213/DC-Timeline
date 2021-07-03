// GIVE CREDITS

const path = require("path");
const fs = require("fs");

const dirPath = path.join(__dirname, "../src/posts");
let postList = [];

const getPost = () => {
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            return console.log("Failed to list directory content" + err);
        }
        files.forEach((file, i) => {
            let obj = {};
            let post;
            fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {
                const getMetaDataIndicies = (acc, element, i) => {
                    if (/^---/.test(element)) {
                        acc.push(i);
                    }
                    return acc;
                };

                const parseMetadata = ({lines, metadataIndicies}) => {
                    if (metadataIndicies.length > 0) {
                        let metadata = lines.slice(metadataIndicies[0] + 1, 
                        metadataIndicies[1]); // Begin sliceing at index 1 i.e after the "---"
                        metadata.forEach(line => {
                            obj[line.split(": ")[0]] = line.split(": ")[1];
                        });
                        return obj;
                    }
                };
                const parseContent = ({lines, metadataIndicies}) => {
                    if (metadataIndicies.length > 0) {
                        lines = lines.slice(metadataIndicies[1] + 1,
                        lines.length)
                    }
                    return lines.join("\n");
                };

                const lines = contents.split("\n");
                const metadataIndicies = lines.reduce(getMetaDataIndicies, []);
                const metadata = parseMetadata({lines, metadataIndicies});
                const content = parseContent({lines, metadataIndicies});

                post = {
                    id: metadata.id,
                    title: metadata.title ? metadata.title : "No title given",
                    author: metadata.author ? metadata.author : "No author given but it's probably me",
                    content: content ? content : "Wow, such empty 😞"  
                };
                postList.push(post);
                if (i === files.length - 1) {
                    const sortedList = postList.sort ((a, b) => {
                        return parseFloat(a.id) - parseFloat(b.id);
                    })
                    let data = JSON.stringify(sortedList);
                    fs.writeFileSync("src/posts.json", data);
                }
            });
        });
    });
}

getPost()