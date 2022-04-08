package Trees.PathSum;

public class Pathsum {

    public static class TreeNode {
        int val = 0;
        TreeNode left = null;
        TreeNode right = null;

        TreeNode(int val) {
            this.val = val;
        }

    }

    public static boolean hasPathSum(TreeNode root, int targetSum) {
        if (root == null)
            return false;
        // to see if hit the leaf

        if (root.left == null && root.right == null) {
            return (targetSum - root.val) == 0;
        }
        return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
    }
}

// see if nodes value is equal to givensun
// if not add the methoids ahead
