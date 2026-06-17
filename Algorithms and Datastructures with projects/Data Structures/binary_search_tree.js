
var displayTree = tree => console.log(JSON.stringify(tree, null, 2));

function Node(value) 
{
    this.value = value;
    this.left = null;
    this.right = null;
}

function binarySearchTree()
{
    this.root = null;

    /* Add new values to binary search tree

        - value in each left child should be less than or equal to parent value

        - value in each right child should be bigger than or equal to parent value

        - Ensure duplicate values can't be added (return null if value is duplicate)

        - If addition is successful, return undefined

    */

    this.add = function(element)
    {
        function insert(root, element)
        {
            if(root === null)
            {
                return new Node(element);
            }

            if(element === root.value)
            {
                return null;
            }

            if(element < root.value)
            {
                let result = insert(root.left, element);

                if(result !== null)
                {
                    root.left = result;
                }
                else
                {
                    return null;
                }
            }

            else
            {
                let result = insert(root.right, element);

                if(result !== null)
                {
                    root.right = result;
                }

                else
                {
                    return null;
                }
            }

            return root;
        };

        let result = insert(this.root, element);

        if(result === null)
        {
            return null;
        }

        this.root = result;

        return undefined;
    }

    // Find minimum value in binary search tree
    this.findMin = function()
    {
        if(this.root === null)
        {
            return null;
        }

        let current = this.root;
        let min = Infinity;

        while(current !== null)
        {
            if(current.value < min)
            {
                min = current.value;
            }

            current = current.left;
        }

        return min;
    }

    // Find maximum value in binary search tree
    this.findMax = function()
    {
        if(this.root === null)
        {
            return null;
        }

        let current = this.root;
        let max = -Infinity;

        while(current !== null)
        {
            if(current.value > max)
            {
                max = current.value;
            }

            current = current.right;
        }

        return max;
    }

    // Check if element is present in binary search tree
    this.isPresent = function(element)
    {
        if(this.root === null)
        {
            return false;
        }

        if(element === this.root.value)
        {
            return true;
        }

        let current = this.root;

        if(element < this.root.value)
        {
            while(current !== null)
            {
                if(element === current.value)
                {
                    return true;
                }

                current = current.left;
            }
        }

        else
        {
            while(current !== null)
            {
                if(element === current.value)
                {
                    return true;
                }

                current = current.right;
            }
        }

        return false;
    }

    this.findMinHeight = function()
    {

        function bHeight(root)
        {
            if(root === null)
            {
                return -1;
            }

            let current = root;

            if(current.left === null)
            {
                return 1 + bHeight(root.right);
            }

            if(current.right === null)
            {
                return 1 + bHeight(root.left);
            }

            return 1 + Math.min(bHeight(root.left), bHeight(root.right));
        }

        return bHeight(this.root);

    }

    this.findMaxHeight = function()
    {

        function bHeight(root)
        {
            if(root === null)
            {
                return -1;
            }

            let current = root;

            if(current.left === null)
            {
                return 1 + bHeight(root.right);
            }

            if(current.right === null)
            {
                return 1 + bHeight(root.left);
            }

            return 1 + Math.max(bHeight(root.left), bHeight(root.right));
        }

        return bHeight(this.root);
    }

    this.isBalanced = function()
    {
        return this.findMaxHeight() - this.findMinHeight() <= 1; 
    }

    /*
        -----------------------------------------------------------------------------

        DFS traversals on BST: 

        - inorder traversal
        - preorder traversal
        - postorder traversal
    */

    // Begin the search at the left-most node and end at the right-most node
    this.inorder = function()
    {
        function inTraverse(root)
        {
            if (root === null)
            {
                return null;
            }

            let current = root;
            let arrLeft = [];
            let arrRight = [];

            if(current.left !== null)
            {
                arrLeft = (inTraverse(current.left));
            }


            if(current.right !== null)
            {
                arrRight = (inTraverse(current.right));
            }

            return [...arrLeft, root.value, ...arrRight];

        }

        return inTraverse(this.root);
    }

    // Explore the root, then left and right subtrees
    this.preorder = function()
    {
        function preTraverse(root)
        {
            if (root === null)
            {
                return null;
            }

            let current = root;
            let arrLeft = [];
            let arrRight = [];

            if(current.left !== null)
            {
                arrLeft = preTraverse(current.left);
            }

            if(current.right !== null)
            {
                arrRight = preTraverse(current.right);
            }

            return [root.value, ...arrLeft, ...arrRight];
        }

        return preTraverse(this.root);
    }

    // Explore all the leaves before the root
    this.postorder = function()
    {
        function postTraverse(root)
        {
            if (root === null)
            {
                return null;
            }

            let current = root;
            let arrLeft = [];
            let arrRight = [];

            if(current.left !== null)
            {
                arrLeft = postTraverse(current.left);
            }

            if(current.right !== null)
            {
                arrRight = postTraverse(current.right);
            }

            return [...arrLeft, ...arrRight, root.value];
        }

        return postTraverse(this.root);
    }

    /*
        -----------------------------------------------------------------------------

        BFS traversals on BST
    */


    this.levelOrder = function()
    {
        function levelTraversal(root)
        {
            if(root === null)
            {
                return null;
            }

            // Queue
            let q = [];

            // Final result
            let res = [];

            q.push(root);

            while(q.length !== 0)
            {
                let front = q.shift();
                res.push(front.value);

                if(front.left !== null)
                {
                    q.push(front.left);
                }
                
                if(front.right !== null)
                {
                    q.push(front.right)
                }
            }

            return res;
        }

        return levelTraversal(this.root);
    }

    this.reverseLevelOrder = function()
    {
        function levelRevTraversal(root)
        {
            if(root === null)
            {
                return null;
            }

            // Queue
            let q = [];

            // Final result
            let res = [];

            q.push(root);

            while(q.length !== 0)
            {
                let front = q.shift();
                res.push(front.value);

                if(front.right !== null)
                {
                    q.push(front.right);
                }

                if(front.left !== null)
                {
                    q.push(front.left);
                }
            }

            return res;
        }

        return levelRevTraversal(this.root);
    }

    /*
        -----------------------------------------------------------------------------

        Deletion on BST
    */

    // No children

    this.remove = function(element)
    {
        function findNode(root, element)
        {
            if(root === null)
            {
                return false;
            }

            if(element === root.value)
            {
                return true;
            }

            if(element < root.value)
            {
                return findNode(root.left, element);
            }

            return findNode(root.right, element);
        }

        function removeNode(root, element)
        {
            if(root === null)
            {
                return null;
            }

            if(element < root.value)
            {
                root.left = removeNode(root.left, element);
                return root;
            }

            if(element > root.value)
            {
                root.right = removeNode(root.right, element);
                return root;
            }

            // No children
            if(root.left === null && root.right === null)
            {
                return null;
            }

            // One child
            if(root.left === null)
            {
                return root.right;
            }

            if(root.right === null)
            {
                return root.left;
            }

            // Two children

            let successor = root.right;

            while(successor.left !== null)
            {
                successor = successor.left;
            }

            root.value = successor.value;

            root.right = removeNode(root.right, successor.value);

            return root;
        }

        if(!findNode(this.root, element))
        {
            return null;
        }

        this.root = removeNode(this.root, element);
        return this.root;
    }

    this.invert = function()
    {
        function invertNode(node)
        {
            if (node === null)
            {
                return null;
            }

            // swap
            let temp = node.left;
            node.left = node.right;
            node.right = temp;

            invertNode(node.left);
            invertNode(node.right);
        }

        invertNode(this.root);
    }
    
}

function isBinarySearchTree(tree)
{

    function validateSearchTree(node, min, max)
    {
        if(node === null)
        {
            return true;
        }

        if(node.value <= min || node.value >= max)
        {
            return false;
        }


        return validateSearchTree(node.left, min, node.value) && validateSearchTree(node.right, node.value, max);
    }


    return validateSearchTree(tree.root, -Infinity, Infinity);

}


var bSearchTree = new binarySearchTree();

bSearchTree.add(5);
bSearchTree.add(6);
bSearchTree.add(7);
bSearchTree.add(4);
bSearchTree.add(3);
bSearchTree.add(1);

displayTree(bSearchTree);

console.log(bSearchTree.findMax()); // Return 7
console.log(bSearchTree.findMin()); // Return 1

console.log(bSearchTree.isPresent(7)); // Return true
console.log(bSearchTree.isPresent(10)); // Return false
console.log(bSearchTree.isPresent(1)); // Return true

// DFS
console.log("Inorder Traversal: ", bSearchTree.inorder()); // Return [1, 3, 4, 5, 6, 7]
console.log("Preorder Traversal: ", bSearchTree.preorder()); // Return [5, 4, 3, 1, 6, 7]
console.log("Postorder Traversal: ", bSearchTree.postorder()); // Return [1, 3, 4, 7, 6, 5]

// BFS
console.log("BFS Traversal: ", bSearchTree.levelOrder()); // Return [5, 4, 6, 3, 7, 1]
console.log("BFS Reverse Traversal: ", bSearchTree.reverseLevelOrder()); // Return [5, 6, 4, 7, 3, 1]


