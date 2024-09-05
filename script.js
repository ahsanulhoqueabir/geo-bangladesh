let endpoints = [];
const Endpoints = async () => {
  await fetch("./endpoints.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      endpoints = data;
      //   console.log(endpoints);
    })
    .catch((err) => {
      console.log(err);
    });
};
let blocks = document.querySelector("#blocks");

const renderBlocks = async () => {
  await Endpoints();
  blocks.innerHTML = "";
  endpoints?.map((endpoint, index) => {
    let block = document.createElement("div");
    block.className = "space-y-2 p-2  rounded-md";
    let codeBlocks = `<pre class="text-accent"><code>[</code></pre>`;

    endpoint.res
      .map((item) => {
        codeBlocks += `<pre class='pl-2 text-warning' ><code>{</code></pre>`;
        Object.entries(item)
          .map(([key, value], ind) => {
            codeBlocks += `<pre class='pl-5 ' ><code>"${key}": "${value}",</code></pre>`;
          })
          .join("");
        codeBlocks += `<pre class='pl-2 text-warning' ><code>},</code></pre>`;
      })
      .join("");
    codeBlocks += `<pre class="text-teal-200" ><code>... </code></pre>`;
    codeBlocks += `<pre class="text-accent" ><code>]</code></pre>`;
    block.innerHTML = `
        <h2 class="text-lg lg:text-2xl lora">${index + 1}. ${
      endpoint.title
    }</h2>
    <p>Method: ${endpoint.method}
    </p>
    <p>
    URL: <code class="pl-1 pr-5 py-1 bg-teal-200 rounded-md">${endpoint.url}
    </code>
    </p>
    
    <p class="">Example Response: ${
      endpoint.note ? `<span>${endpoint.note}</span>` : ""
    } </p>
      <div class="mockup-code no-scrollbar max-w-[350px] lg:max-w-full">
        ${codeBlocks}
            </div>
         

        `;
    blocks.appendChild(block);
  });
};
renderBlocks();
