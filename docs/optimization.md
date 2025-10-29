# 关于凸优化

## 凸函数

### 定义：

满足以下条件：

$$
f: \mathbb{R}^n \rightarrow \mathbb{R}
$$

$$
\text{dom} f 是凸集
$$

$$
\forall x, y \in \text{dom} f, \forall \theta \in [0, 1]，
$$

$$
f(\theta x + (1 - \theta)y) \leq \theta f(x) + (1 - \theta) f(y)
$$

则称f是凸函数。

理解：任意两点 凸组合的函数值 小于等于 函数值的凸组合


### 一阶条件

$$
\forall x, y \in \text{dom} f, f(y) \geq f(x) + \nabla f(x)^T (y - x)
$$

后面加的那一项是 梯度和 (y - x) 的内积
