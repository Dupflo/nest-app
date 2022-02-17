import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from 'src/student/student.module';
import { TeacherModule } from 'src/teacher/teacher.module';
import { config } from '../orm.config';

@Module({
  imports: [TypeOrmModule.forRoot(config), TeacherModule, StudentModule],
})
export class AppModule {}
