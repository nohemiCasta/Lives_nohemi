import java.util.Scanner;

public class MangosyNaranjas {

	public static void main(String[] args) {
		
		Scanner sc= new Scanner(System.in);
		int n,m;
		System.out.println("ingresa un número de Naranjas: ");
		n = sc.nextInt();
		System.out.println("ingresa un numero de Mangos: ");
		m = sc.nextInt();
		int mcd= maxDivi (n,m);
		System.out.println("la cantidad de cajas son: "+ mcd);
		int naraxc= n/mcd;
		System.out.println("la cantidad de naranjas por cajas son: "+ naraxc);
		int mangxc= m/mcd;
		System.out.println("la cantidad de mangos por cajas son: "+ mangxc);
		sc.close();
	}
		

    public static int maxDivi(int n, int m) {
        int total;
        while (m != 0) {
            total = m;
            m = n % m;
            n = total;
        }
        return n;
        
    }

    

}
