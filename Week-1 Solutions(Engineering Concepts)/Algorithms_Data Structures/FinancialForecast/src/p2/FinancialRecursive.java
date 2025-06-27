package p2;
public class FinancialRecursive {

    public static double forecastRecursive(double principal, double rate, int years) {
        if (years == 0) {
            return principal;
        }
        return (1 + rate) * forecastRecursive(principal, rate, years - 1);
    }

    public static void main(String[] args) {
        double initialAmount = 10000;
        double annualGrowthRate = 0.06;
        int forecastYears = 10;

        double result = forecastRecursive(initialAmount, annualGrowthRate, forecastYears);
        System.out.printf("Future Value after %d years: ₹%.2f\n", forecastYears, result);
    }
}
