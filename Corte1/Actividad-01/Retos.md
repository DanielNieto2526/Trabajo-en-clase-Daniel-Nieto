# Solución a los retos propuestos en clase
## Reto 1
### 1.
Verter el contenido del vaso "B" al vaso "C" vacío.
### 2.
Tomar el vaso "A" y verter todo el contenido al vaso "B" ahora vacío.
### 3.
Tomar el vaso "C" y verter todo al vaso "A".

---

## Reto 2
### Seudocódigo

```text
Inicio

    Ver si es condición de urgencia

    Si urgencia=Falso Entonces
        Ver edad
        Si edad>=65 o edad<=5 Entonces
            Ver tiempo de espera
            Si tiempo de espera>=30 min Entonces
                Clasificar como "Media"
            Sino
                Clasificar como "Baja"
        Sino
            Ver tiempo de espera
            Si tiempo de espera>=60 min Entonces
                Clasificar como "Media"
            Sino
                Clasificar como "Baja"
    Sino
        Clasificar como "Alta"
Fin
```
### Casos de prueba

### Paciente 1

**Datos**

- Edad: 72 años
- Condición de urgencia: No
- Tiempo de espera: 45 minutos

#### Aplicación del algoritmo

1. ¿Tiene condición de urgencia? → **No**
2. ¿Edad mayor o igual a 65 años? → **Sí**
3. ¿Ha esperado al menos 30 minutos? → **Sí**
4. **Resultado:** Prioridad **Media**

---

### Paciente 2

**Datos**

- Edad: 30 años
- Condición de urgencia: Sí
- Tiempo de espera: 10 minutos

#### Aplicación del algoritmo

1. ¿Tiene condición de urgencia? → **Sí**
2. No es necesario evaluar la edad ni el tiempo de espera.
3. **Resultado:** Prioridad **Alta**

---

### Paciente 3

**Datos**

- Edad: 20 años
- Condición de urgencia: No
- Tiempo de espera: 40 minutos

#### Aplicación del algoritmo

1. ¿Tiene condición de urgencia? → **No**
2. ¿Edad mayor o igual a 65 años o menor o igual a 5 años? → **No**
3. ¿Ha esperado al menos 60 minutos? → **No**
4. **Resultado:** Prioridad **Baja**

---
## Reto 3

La estrategia que puede ser usada para solucionar este reto, puede ser una bisección simple, la idea de este algoritmo es un divide y vencerás, lo primero que
se hará es preguntar si el número es el que se encuentra el medio del intervalo, en este caso sería **50**, lo siguiente es tomar un nuevo intervalo según la
respuesta recibida, es decir, si la respuesta es que es mayor, ahora se tomaría el intervalo entre 51 y 100, si la respuesta es que es menor, se tomaría el
intervalo entre 1 y 49, con este nuevo intervalo se repite el proceso de tomar el valor intermedio y preguntar si el número es mayor o menor, y así si se sigue
este procedimiento de manera recursiva, siempre se obtendrá el número a adivinar en 7 intento o menos.
