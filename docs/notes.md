\# Technical Notes



\## Biggest Docker Problem



The main Docker issue was that the Dockerfile was accidentally saved as Dockerfile.txt. Docker could not find the file during the build process.



\### Solution



The file was recreated correctly as Dockerfile without any extension and the image was rebuilt successfully.



\## Most Important Git/GitHub Lesson



I learned how Git tracks project history using commits and how GitHub provides a remote repository for collaboration and backup.



Using meaningful commit messages makes project history easier to understand and maintain.

## VPS Deployment Experience



The deployment process was successful using Render platform with Docker.



\### Challenges:

\- Initial issue with port binding (PORT 3000)

\- Understanding how cloud deployment differs from local Docker



\### Solution:

\- Ensured the application listens on process.env.PORT or 3000

\- Used Render automatic Docker build system

\- Verified logs until service became live

