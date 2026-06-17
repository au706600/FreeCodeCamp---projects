
// BFS with queue (FIFO)

function bfs(graph, root)
{
    if(graph == null || graph.length === 0)
    {
        return {};
    }

    var nodesLen = {};

    for(let i = 0; i < graph.length; i++)
    {
        nodesLen[i] = Infinity;
    }

    var q = [];
    q.push(root);
    nodesLen[root] = 0;

    while(q.length !== 0)
    {
        let front = q.shift();
        
        for(let i = 0; i < graph[front].length; i++)
        {
            if(graph[front][i] === 1 && nodesLen[i] === Infinity)
            {
                q.push(i);

                // Shortest distance from root to each node which is one more than the shortest distance to the node, it just came from (front)
                nodesLen[i] = nodesLen[front] + 1;
            }
        }
    }

    return nodesLen;
}


var exBFSGraph = [
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [0, 0, 1, 0]
];

// With a start node of 3, it should return: 

// {
// 0: 3, 
// 1: 2, 
// 2: 1, 
// 3: 0 }

console.log(bfs(exBFSGraph, 3));



// Test cases

// 1. Test case

// The input graph [
// [0, 1, 0, 0], 
// [1, 0, 1, 0], 
// [0, 1, 0, 1], 
// [0, 0, 1, 0]] 

// with a start node of 1 should return: 
// {
// 0: 1, 
// 1: 0, 
// 2: 1, 
// 3: 2 }

// 2. Test case

// The input graph [
// [0, 1, 0, 0], 
// [1, 0, 1, 0], 
// [0, 1, 0, 0], 
// [0, 0, 0, 0]] 

// with a start node of 1 should return: 

// {
// 0: 1, 
// 1: 0, 
// 2: 1, 
// 3: Infinity }

// 3. Test case

// The input graph [

// [0, 1, 0, 0], 
// [1, 0, 1, 0], 
// [0, 1, 0, 1], 
// [0, 0, 1, 0]] 

// with a start node of 0 should return 

// {
// 0: 0, 
// 1: 1, 
// 2: 2, 
// 3: 3 }

// 4. Test case

// The input graph [
// [0, 1], 
// [1, 0]] 

// with a start node of 0 should return {0: 0, 1: 1}

//----------------------------------------------------------------

// DFS

function dfs(graph, root)
{
    if(graph === null || graph.length === 0)
    {
        return [];
    }

    let res = [];
    let stk = [];
    let visited = [];
    stk.push(root);
    visited[root] = true;


    while(stk.length !== 0)
    {
        let front = stk.pop();
        res.push(front);

        for(let i = 0; i < graph[front].length; i++)
        {
            if(graph[front][i] == 1 && !visited[i])
            {
                stk.push(i);
                visited[i] = true;
            }
        }
    }

    return res;
}


var exDFSGraph = [
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [0, 0, 1, 0]
];
console.log(dfs(exDFSGraph, 3)); // return [3, 2, 1, 0]



/*
var exDFSGraph = [
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [0, 0, 1, 0]
];

console.log(dfs(exDFSGraph, 1)); // return an array with [1, 2, 3, 0]
*/


