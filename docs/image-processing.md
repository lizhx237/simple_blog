# 关于数字图像处理

## 第3章里面的卷积

设w是核，f是图像，g是输出图像。

$$
g(x,y) = w(x,y) * f(x,y) = \sum_{s=-a}^{a} \sum_{t=-b}^{b} w(s, t) f(x-s,y-t)
$$

记得填充0，使得输出图像尺寸等于原图像尺寸。

## 傅里叶变换

单变量连续时间傅里叶变换（对t积分）

$$
F(\mu) = \int_{-\infty}^{\infty} f(t) e^{-j 2 \pi \mu t} dt
$$

逆变换（对mu积分）
$$
f(t) = \int_{-\infty}^{\infty} F(\mu) e^{j 2\pi \mu t} d \mu
$$


注：和信号与系统学的不太一样。对应关系：
$$
\omega = 2 \pi \mu
$$

## 第4章两个函数的卷积

$$
(f*h)(t) = \int_{-\infty}^{\infty} f(\tau) h(t-\tau) d \tau
$$
